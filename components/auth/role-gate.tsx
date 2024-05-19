'use client';

// import { currentRole } from '@/lib/auth'; //*Use with Server Component**
import { useCurrentRole } from '@/hooks/use-current-role'; // **Use with Client Component**
import { UserRole } from '@prisma/client';
import { FormError } from '@/components/form-error';

interface RolegateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RolegateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
