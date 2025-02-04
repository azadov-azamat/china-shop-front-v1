import React from "react";

import {Route, Routes} from "react-router-dom";
import {routes} from "./utils/constants.ts";
import Layout from "./layout/layout.tsx";
import {SiteLoadingComponent} from "./components";
import {IndexController} from "./app/index.ts";

// CSS
import './index.css'
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/scss/main.scss';

// CONFIG
import './utils/i18n.ts';

import i18n from "./utils/i18n.ts";
import {useTranslation} from "react-i18next";
import useAuth from "./hooks/auth.ts";

declare global {
    interface Window {
        Telegram: any;
    }
}

function App() {

    const {t} = useTranslation()
    // const dispatch = useAppDispatch();
    const { load } = useAuth();

    const [loading, setLoading] = React.useState(load);

    i18n.on('languageChanged', () => {
        // setLoading(true);
        updateTitle()
    });

    React.useEffect(() => {
        if (window && window.Telegram?.WebApp.platform !== 'unknown') {
            // if (window.Telegram.WebApp.requestFullscreen) {
            //     // window.Telegram.WebApp.requestFullscreen();
            //     window.Telegram.WebApp.expand();
            // } else {
                window.Telegram.WebApp.expand();
            // }

            if (window.Telegram.WebApp.isVerticalSwipesEnabled) {
                window.Telegram.WebApp.disableVerticalSwipes();
            }
        }

        updateTitle();

        return () => {
            i18n.off('languageChanged', updateTitle);
        };
    }, [])

    const updateTitle = () => {
        document.title = t('app.title');
        document.documentElement.lang = i18n.language;
        setLoading(false)
    };

    return (
        loading ? <SiteLoadingComponent setLoading={setLoading}/> : <Routes>
            {
                routes.map(route =>
                    <Route
                        key={route.id}
                        path={route.path}
                        element={
                            <Layout>
                                <route.component/>
                            </Layout>}
                    />
                )
            }
            <Route path="*" element={<Layout><IndexController/></Layout>}/>
        </Routes>
    )
}

export default App
