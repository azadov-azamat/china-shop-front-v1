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

function App() {

    const {t} = useTranslation()
    const [loading, setLoading] = React.useState(false);

    i18n.on('languageChanged', () => {
        setLoading(true);
        updateTitle()
    });

    React.useEffect(()=>{
        updateTitle();

        return () => {
            i18n.off('languageChanged', updateTitle);
        };
    }, [])

    const updateTitle = () => {
        document.title = t('app.title');
        document.documentElement.lang = i18n.language;
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
