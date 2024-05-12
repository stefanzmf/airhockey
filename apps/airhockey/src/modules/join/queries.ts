import { useMutation, useQuery } from '@tanstack/react-query';

import {api} from '../../queryClient'

export const usersKeys = {
  users: ['users'] as const,
}

export const useUserMutation = () => {
  return useMutation({
    mutationFn: ({ username, email }: {username: string, email: string}) => {
      return api.post('/users/create', { username, email })
    }
  })
}

export const useUsersQuery = () => {
  return useQuery({
    queryKey: usersKeys.users,
    queryFn: async () => {
      const response = await api.get('/users');

      return response.data
    }
  })
}
