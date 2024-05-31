import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import {io} from 'socket.io-client'

import {api} from '../../queryClient'
import { UserResponseData } from './utils';

export const usersKeys = {
  users: ['users'] as const,
  usersCount: ['usersCount'] as const,
}

export const useUserMutation = () => {
  return useMutation<{ data: UserResponseData }, unknown, {username: string, email: string}>({
    mutationFn: ({ username, email }) => {
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

export const useUsersCountQuery = () => {
  return useQuery({
    queryKey: usersKeys.usersCount,
    queryFn: async () => {
      const response = await api.get('/users/count');

      return response.data
    }
  })
}

export const useUsersCountLive = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const socket = io('ws://localhost:3000', {
      path: '/users'
    })

    socket.on('activeUsersCount', (activeUsersCount) => {
      setCount(activeUsersCount)
    })

    return () => {
      socket.off('activeUsersCount')
    }
  }, []);

  return count;
}
