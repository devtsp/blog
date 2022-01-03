import Feed from "./Feed";
import { useStoreActions, useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main className="Home flexAux">
      {isLoading && <p className="statusMsg">Loading Posts...</p>}
      {!isLoading && fetchError && <p className="statusMsg">{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p>No posts to display</p>
        ))}
    </main>
  );
};

export default Home;
