import {FC} from "react";
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRoutesProps = {
    isLogin: boolean;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({isLogin}) => {
    return (
        isLogin ? <Outlet/> : <Navigate to='/unauthorize' />
    )
}

export default ProtectedRoutes