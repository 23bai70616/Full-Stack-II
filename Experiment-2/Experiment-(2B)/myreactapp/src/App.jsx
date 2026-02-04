import Navbar from './Materialui/Navbar';
import CustomButton from './Materialui/Button';
import CustomCard from './Materialui/Card';

function App() {
  return (
    <>
      <Navbar />

      <CustomButton text="Primary Action" />

      <CustomCard
        title="Material UI Card"
        description="This is a reusable card component built using Material UI."
      />
    </>
  );
}

export default App;
