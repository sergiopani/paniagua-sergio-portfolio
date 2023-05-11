'use client';
import Image from "next/image";
import { getGithubRepositories } from "../../../api/githubApi";
import { Main, Loading } from "../../../components/ui";
import { Repository } from "../../../types";
import style from 'styles/projects/_github_repos.module.scss';
import { FC, useEffect, useState } from "react";
import global from 'styles/_global_classes.module.scss';


const GithubProyects: FC = () => {
    const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([]);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchRepositories = async () => {
        const repositoryFetch: Repository[] = await getGithubRepositories('sergiopani');
        setRepositories(repositoryFetch);
        setFilteredRepositories(repositoryFetch);
        setLoading(false);
    };

    useEffect(() => {

        fetchRepositories();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        console.log(value);

        if (!value) {

            return setFilteredRepositories(repositories);
        }
        const filter = repositories.filter((repository: Repository) => {
            return repository.name.toLowerCase().includes(value.toLowerCase());
        }
        );

        setFilteredRepositories(filter);
    };


    return (
        <Main>
            <div className={style.video__bakground}>
                <h1 className={`${global.super__title} ${style.video__title}`}>Github Repos</h1>
                <video className={style.video__content} autoPlay muted loop>
                    <source src="/videos/programming-video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={style.center}>
                <input className={style.input__search} type="text" placeholder="Busca por proyecto..." onChange={handleChange} />
            </div>
            <div className={style.work__objetivos}>
                {
                    loading && <Loading />

                }
                {filteredRepositories.map((repository: Repository) => (
                    <a href={repository.html_url}
                        key={repository.name}
                        className={style.link__objetivo}
                        target="_blank">
                        <div className={style.titulo__defecto}>
                            {repository.name}
                        </div>
                        {/* <a href={repository.html_url} target="_blank" rel="noreferrer">
                            {repository.name}
                        </a> */}
                        <p className={style.paragrafo__defecto}>{repository.description ?
                            repository.description :
                            'No se ha podido cargar la desripcion'}

                            <span className={style.lenguage}>Javascript + Typescript </span>
                        </p>
                        <div className={style.icono}>
                            <Image
                                src='/icons/github1.svg'
                                alt='github-icon'
                                width={30}
                                height={30}
                            />

                            <Image
                                src='/icons/github2.svg'
                                alt='github-icon'
                                width={30}
                                height={30}
                            />


                        </div>
                    </a>
                ))}
            </div>

        </Main>
    );
};

export default GithubProyects;