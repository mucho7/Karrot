type Role = 'ADMIN' | 'USER' | 'GUEST';
type PostStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

type User = { id: string; name: string; role: Role };
type Post = { id: string; title: string; content: string; status: PostStatus; authorId: string };

let users: User[] = [
  { id: 'u1', name: 'Alice', role: 'ADMIN' },
  { id: 'u2', name: 'Bob', role: 'USER' }
];

let posts: Post[] = [
  { id: 'p1', title: 'Hello', content: 'World', status: 'PUBLISHED', authorId: 'u1' }
];

export const resolvers = {
  Query: {
    users: (_: unknown, args: { role?: Role }) =>
      args.role ? users.filter(u => u.role === args.role) : users,
    user: (_: unknown, { id }: { id: string }) => users.find(u => u.id === id) ?? null,

    posts: (_: unknown, args: { status?: PostStatus }) =>
      args.status ? posts.filter(p => p.status === args.status) : posts,
    post: (_: unknown, { id }: { id: string }) => posts.find(p => p.id === id) ?? null
  },

  Mutation: {
    createUser: (_: unknown, { input }: { input: { name: string; role: Role } }) => {
      const newUser: User = { id: `u${Date.now()}`, ...input };
      users.push(newUser);
      return newUser;
    },
    createPost: (
      _: unknown,
      { input }: { input: { title: string; content: string; authorId: string; status: PostStatus } }
    ) => {
      const author = users.find(u => u.id === input.authorId);
      if (!author) throw new Error('Author not found');
      const newPost: Post = { id: `p${Date.now()}`, ...input };
      posts.push(newPost);
      return newPost;
    }
  },

  User: {
    posts: (parent: { id: string }, args: { status?: PostStatus }) => {
      const mine = posts.filter(p => p.authorId === parent.id);
      return args.status ? mine.filter(p => p.status === args.status) : mine;
    }
  },

  Post: {
    author: (parent: { authorId: string }) => users.find(u => u.id === parent.authorId)!
  }
};
