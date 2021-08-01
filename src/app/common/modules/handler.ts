import spinner from './spinner';

export default function handleProcess(): void {
  process.on('exit', code => {
    switch (code) {
      case 0:
        spinner('All complete').succeed();
        console.log('Bye');
        break;
      case 1:
        spinner('The app terminated').fail();
        console.log('Bye');
        break;
      default:
        break;
    }
  });
}
