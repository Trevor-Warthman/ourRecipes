<template>
    <section id="firebaseui-auth-container"></section>
</template>

<script>

import firebase from 'firebase/compat/app'
import * as firebaseui from "firebaseui"
import auth from '../firebaseAuth'
import "firebaseui/dist/firebaseui.css";
export default {
    mounted() {       
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(auth);
        }
        var uiConfig = {
            signInSuccessUrl: "/",
            signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }
};
</script>
