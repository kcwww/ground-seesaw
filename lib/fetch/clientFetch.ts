'use client';

const clientComponentFetch = async (url: string, init?: RequestInit) => {
  const defaultInit: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const finalInit = init ? { ...defaultInit, ...init } : defaultInit;

  try {
    const res = await fetch(url, finalInit);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetching Error : ', error);
    return null;
  }
};

export default clientComponentFetch;
