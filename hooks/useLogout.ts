import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    });
    router.push('/');
  };

  return logout;
};