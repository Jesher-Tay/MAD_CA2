import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks/AuthContext";
import BottomNav from "./BottomNav";
import AuthNav from "./AuthNav";
import { Loading } from "../screens/index";

const RootNavigator = () => {
    const { getUser, user, fetch } = useAuth();
    useEffect(() => {
        getUser();
    }, []);

    if (!fetch) {
        return user ? <BottomNav /> : <AuthNav />;
    } else {
        return <Loading />;
    }
};

export default RootNavigator;