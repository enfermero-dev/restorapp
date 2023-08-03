import i18next from 'i18next';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
        <ul className="flex items-center h-full sm:justify-normal justify-between">
          <li>
            <NavLink to="/" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-house"></i>
              <div>{i18next.t('navbar-link-index')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-mug-hot"></i>
              <div>{i18next.t('navbar-link-menu')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-check-to-slot"></i>
              <div>{i18next.t('navbar-link-reservation')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-lock"></i>
              <div>{i18next.t('navbar-link-admin')}</div>
            </NavLink>
          </li>
        </ul>
    </>
  )
}
