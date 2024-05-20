'use client';

import { Card } from '@/components/ui/card';
import { UserInfo } from '@/components/user-info';
import { useCurrentUser } from '@/hooks/use-current-user';
import { BeatLoader } from 'react-spinners';

const ClientPage = () => {
  const { user, loading } = useCurrentUser();

  if (loading)
    return (
      <Card className="max-w-[600px] w-full flex flex-col p-4 gap-2 items-center justify-center">
        <p className="text-muted-foreground text-sm">Carregando...</p>
        <BeatLoader />
      </Card>
    );
  return <UserInfo label="🧑🏻‍💻 Client component" user={user || undefined} />;
};

export default ClientPage;
