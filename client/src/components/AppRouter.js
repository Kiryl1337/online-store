import React, {useContext} from 'react';
import {Routes, Route} from "react-router";
import {authRoutes, publicRoutes} from "../route";
import {Context} from "../index";

const AppRouter = () => {
    let {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}

        </Routes>


    );
};

export default AppRouter;