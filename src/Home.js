import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
	const searchResults = useStoreState(state => state.searchResults);
	return (
		<main className="Home flexAux">
			{isLoading && <p className="statusMsg">Loading Posts...</p>}
			{!isLoading && fetchError && <p className="statusMsg">{fetchError}</p>}
			{!isLoading &&
				!fetchError &&
				(searchResults.length ? (
					<Feed posts={searchResults} />
				) : (
					<p className="no-match">
						No post matches! Try with another search...
					</p>
				))}
		</main>
	);
};

export default Home;
