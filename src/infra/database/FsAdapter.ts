import Connection from './Connection';
import * as fs from 'fs';

// Adapter, Wrapper = Design Pattern de comportamento
export default class FsAdapter implements Connection {
  query(path: string, encoding: BufferEncoding): Promise<any> {
    return JSON.parse(fs.readFileSync(path, encoding));
  }
}
