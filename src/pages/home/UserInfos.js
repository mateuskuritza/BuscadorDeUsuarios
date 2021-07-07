import { useContext, useEffect } from "react";
import styled from "styled-components";
import useGetUserInfos from "../../Requests/useGetUserInfos";

import Loader from "react-loader-spinner";
import dayjs from "dayjs";

import { MdGpsFixed as GpsIcon, MdBusinessCenter as BusinessIcon, MdWebAsset as WebIcon } from "react-icons/md";
import { FiTwitter as TwitterIcon } from "react-icons/fi";
import UserNameContext from "../../contexts/UserNameContext";

export default function UserInfos() {
	const { userName } = useContext(UserNameContext);

	const { loading, error, data, fetchData } = useGetUserInfos(userName);

	useEffect(() => {
		fetchData();
	}, [userName]);

	function formatDate(date) {
		return dayjs(date).format("DD/MM/YYYY");
	}

	function existingValue(value) {
		return value || <span>não informado</span>;
	}

	if (!userName) return <h3>Pesquise por um usuário!</h3>;

	if (loading) {
		return <Loader type="Puff" color="#000000" height={300} width={300} timeout={3000} />;
	}
	if (error) return <h3>Usuário não encontrado!</h3>;

	const { name, avatar_url, location, blog, public_repos, created_at, updated_at, company, twitter, bio } = data;

	return (
		<UserInfosContainer>
			<PessoalInfos>
				<strong>{name}</strong>
				<div>
					<img src={avatar_url} alt="User avatar" />
					{bio ? <p> {bio} </p> : null}
				</div>
			</PessoalInfos>

			<p>
				<GpsIcon /> Endereço: {existingValue(location)}
			</p>
			<p>
				<TwitterIcon /> Twitter: {existingValue(twitter)}
			</p>
			<p>
				<BusinessIcon /> Empresa atual: {existingValue(company)}
			</p>
			<p>
				<WebIcon /> Site pessoal: {existingValue(blog)}
			</p>

			<GitHubInfos>
				<p>
					Conta criada em {formatDate(created_at)} com ultima alteração no dia {formatDate(updated_at)}.
				</p>
				<p>
					{name ? name + "possui" : "Possui"} {public_repos} repositórios públicos.
				</p>{" "}
			</GitHubInfos>
		</UserInfosContainer>
	);
}

const UserInfosContainer = styled.div`
	padding: 20px 40px;
	border: 1px solid rgb(224, 224, 224);
	box-shadow: 4px 4px 8px 1px var(--text-main);
	width: 95%;

	span {
		color: rgb(206, 206, 206);
	}
	strong {
		font-size: 20px;
	}
`;

const PessoalInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
	div {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		margin-top: 10px;
		img {
			border-radius: 50%;
			width: 120px;
			margin-right: 20px;
		}
	}
`;

const GitHubInfos = styled.div`
	margin-top: 20px;
`;
