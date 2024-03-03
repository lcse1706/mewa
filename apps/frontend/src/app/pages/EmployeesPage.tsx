import { Header } from '@ems/common-ui';
import { EmployeesList } from '../features/employees/EmployeesList';

export const EmployeesPage = () => {
  return (
    <div>
      <Header>Employees</Header>
      <EmployeesList />
    </div>
  );
};
