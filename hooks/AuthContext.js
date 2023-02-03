import React, { useState, useContext, createContext, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app, db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, storage } from "../config/firebase";
import { collection, addDoc, getDocs, where, query, doc, orderBy, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';
import * as ImagePicker from 'expo-image-picker';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
    const [fetch, setFetch] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [docId, setDocId] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    const [invisible, setInvisible] = useState(true);
    const [caption, setCaption] = useState(null);
    const [address, setAddress] = useState(null);
    const [desc, setDesc] = useState(null);
    const [reviewData, setReviewData] = useState([]);
    const [modalData, setModalData] = useState(false);
    const [imageUrl, setImageUrl] = useState({uri: 'https://firebasestorage.googleapis.com/v0/b/mad-ca3-54f72.appspot.com/o/images%2Flol.jfif?alt=media&token=8300b08e-a853-4879-9524-f5f169f19ec8'});
    const [cap, setCap] = useState('filler');
    const [add, setAdd] = useState('filler');
    const [des, setDes] = useState('filler');

    const signUp = async (email, password, username) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            addDoc(collection(db, "users"), {
                username: username,
                email: user.email,
                uid: user.uid
            });
            getUser();
        } catch (error) {
            setError('error in creating user',error);
        }
    }

    const login = async (email, password) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            getUser();
        } catch (error) {
            setError('error in login',error);
        }
    }

    const getUser = async () => {
        setFetch(true)
        try {
            onAuthStateChanged(auth, async (currentUser) => {
                if (currentUser) {
                    console.log(currentUser);
                    const q = query(collection(db, 'users'), where('uid', '==', currentUser.uid))
                    const querySnapshot = await getDocs(q)
                    querySnapshot.forEach((doc) => {
                        setDocId(doc.id)
                        setUser(doc.data())
                    });
                    setFetch(false)
                } else {
                    setUser(null);
                    setFetch(false)
                }
            })
        } catch (error) {
            setFetch(false)
            console.log("Error in getting user", error);
        }
    };

    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setAccessToken(null);
        } catch (err) {
            console.log("Error in signing out", err);
        }
    };

    const pickImage = async () => {
        let imgURI = null;

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
        });

        console.log(result);

        if (!result.canceled) {
            imgURI = result.assets[0].uri;
            setImage(imgURI);
            setInvisible(false);
        }
    };

    const getBlobForImage = async(uri) => {
        const blob = await new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.onerror = function() {reject('network error')};
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    {reject('Loading error:' + xhr.statusText)}
                };
            }
            xhr.responseType = 'blob';
            xhr.open("GET", uri, true);
            xhr.send(null);
        });
        return blob;
    }

    const uploadImage = async (image) => {
        try {
            const imgURI = image;
            const blobFile = await getBlobForImage(imgURI);
            const uid = user.uid;
    
            const storageRef = ref(storage, `images/${uid + v4()}.jpg`);
            console.log(storageRef);
            await uploadBytes(storageRef, blobFile).then(() => {
                console.log('Uploaded a blob or file!');
            });
            const url = await getDownloadURL(storageRef);
            console.log(url);
            return url;
        } catch (error) {
            console.log(error);
        }
    };

    const createReview = async (image, caption, address, description) => {
        try {
            const url = await uploadImage(image);
            addDoc(collection(db, `review/${user.uid}/post`), {
                Address: address,
                Caption: caption,
                Description: description,
                imageURL: url,
                uid: user.uid,
                email: user.email,
                createdAt: new Date()
            });
            setImage(null);
            setCaption(null);
            setAddress(null);
            setDesc(null);
            setInvisible(true);
        } catch (error) {
            console.log(error);
        }
    }

    const getReview = async () => {
        try {
            const q = query(collection(db, `review/${user.uid}/post`));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // console.log(doc.id);
                reviewData.findIndex((item) => item.id === doc.id) === -1 ? setReviewData(reviewData => reviewData.concat(doc)) : console.log('Post already exist');
            });
        } catch (error) {
            console.log(error);
        }
        return reviewData;
    }

    // const setModal = async (reviewId) => {
    //     try {
    //         const q = query(collection(db, `review/${user.uid}/post`), where('id', '==', reviewId));
    //         const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id);
    //             setModalData({show: true, data: doc.data()})
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    const values = {
        signUp,
        login,
        getUser,
        signOutUser,
        pickImage,
        uploadImage,
        createReview,
        getReview,
        user,
        error,
        docId,
        fetch,
        image,
        invisible,
        caption,
        address,
        desc,
        reviewData,
        modalData,
        imageUrl,
        cap,
        add,
        des,
        setCaption,
        setAddress,
        setDesc,
        setModalData,
        setImageUrl,
        setCap,
        setAdd,
        setDes
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}