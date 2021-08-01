import ora from 'ora';

export default function spinner(msg: string): ora.Ora {
  return ora(msg);
}
