const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'portfolio-v2-jet-xi.vercel.app';