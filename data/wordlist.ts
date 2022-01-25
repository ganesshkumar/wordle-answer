import { wordlist } from './words'

export const getWords = (indices: number[]) => {
  return indices
    .map(idx => idx % wordlist.length)
    .map(idx => wordlist[idx]);
}
