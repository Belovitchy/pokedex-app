interface PokemonInterface {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonName: (name: string) => void;
	pokemonList: PokemonInterface[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((pokemon) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => {
						setPokemonName(pokemon.name);
						pokemon.name === "pikachu" ? alert("pika pikachu !!!") : "";
					}}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}

export default NavBar;
