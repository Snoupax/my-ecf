import { StyH4 } from '../../styled/styled';

const Home = () => {
    return (
        <div>
            <StyH4>Home</StyH4>
            <p>
                Voici la page d'accueil de cette application de création de
                ToDoList <br /> Cette application vous permet de créer des
                ToDoList, autrement dit des Listes de choses à faire. <br />
                Et de pouvoir y organiser vos tâches, de pouvoir les valider.
                <br /> Vous devrez vous connecter pour accèder à vos listes. Je
                vous donne rendez-vous sur la page de connexion. <br />
                Ce projet a été réalisé avec React.js, React-Router,
                styled-components.
            </p>
        </div>
    );
};

export default Home;
