import type { Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Menu } from '../Menu';
import { ROUTE } from '../../../routes';
import { AboutPage } from '../../../pages/AboutPage';
import { ContactPage } from '../../../pages/ContactPage';
import { EmployeesPage } from '../../../pages/EmployeesPage';
import { RegistrationPage } from '../../../pages/RegistrationPage';

const meta = {
  title: 'Components/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const _Menu = () => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path={ROUTE.ABOUT} element={<AboutPage />} />
      <Route path={ROUTE.CONTACT} element={<ContactPage />} />
      <Route path={ROUTE.EMPLOYEES} element={<EmployeesPage />} />
      <Route path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
    </Routes>
  </MemoryRouter>
);
