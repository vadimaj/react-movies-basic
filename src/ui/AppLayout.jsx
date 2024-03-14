import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import Footer from './Footer';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="min-h-full first-line:overflow-clip flex flex-col  ">
      {isLoading && <Loader />}
      <Header />
      <main className="flex-1 outline-dashed outline-orange-600 outline-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
