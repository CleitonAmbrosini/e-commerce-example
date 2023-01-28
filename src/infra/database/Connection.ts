/* eslint-disable no-unused-vars */
export default interface Connection {
  query(path: string, encodanying: BufferEncoding): Promise<any>;
}
