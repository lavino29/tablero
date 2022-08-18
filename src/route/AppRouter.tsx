
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/pages/login/Login';
import { DashboardRouter } from './DashboardRouter';
import { PublicRouter } from './PublicRouter';



export const AppRouter = () => {


  return (

    <Routes>

      <Route path="/login" element={
        // rutas publicas
        <PublicRouter>
          <Login />
        </PublicRouter>} />
        {/* Rutas privadas  */}
      <Route path="/*" element={<DashboardRouter />} />
    </Routes>


  )
}
