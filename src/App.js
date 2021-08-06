import { VirtualMultiSelect } from './lib/index';

function App() {

  const handleOnchange = (data) => {
    console.log(data);
  }

  return (<VirtualMultiSelect
    options={[
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ]}
    id='aravind'
    multiple={true}
    handleOnchange={handleOnchange}
  />);
}

export default App;
