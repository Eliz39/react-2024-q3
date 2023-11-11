import styled from "styled-components";
import { style } from "../../styles/styleVariables";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCharacter } from "../../utils/api";
import { CardType } from "../../types/CardType";

export function DetailsPage() {
  const urlParams = new URLSearchParams(useLocation().search);
  const characterId = urlParams.get("details");
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState<CardType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateDetail = useCallback(async () => {
    if (!characterId) return;
    setIsLoading(true);
    const character = await getCharacter(characterId);
    character && setCharacterData(character);
    setIsLoading(false);
  }, [characterId]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    updateDetail();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [updateDetail]);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    navigate(-1);
  };

  return (
    <DetailsPageWrapper>
      {isLoading && <p>Loading...</p>}
      <DetailsModal onClick={handleClose} />
      {characterData && (
        <Div_Card>
          <Div_Close>
            <P_Close onClick={handleClose}>X</P_Close>
          </Div_Close>
          <Img src={characterData.image} alt={`${characterData.name} image`} />
          <P_Name>{characterData.name}</P_Name>
          <Div_Info>
            <p>Status: {characterData.status}</p>
            <p>Species: {characterData.species}</p>
            <p>Gender: {characterData.gender}</p>
            <p>Location: {characterData.location?.name}</p>
          </Div_Info>
        </Div_Card>
      )}
    </DetailsPageWrapper>
  );
}

const DetailsPageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 3;
  display: flex;
  justify-content: end;
`;

const DetailsModal = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${style.transparentBlack13};
`;

const Div_Card = styled.div`
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  color: white;

  background: ${style.transparentBlack92};
  border: 1px solid ${style.gray};
  border-radius: 10px;

  z-index: 4;
`;

const Img = styled.img`
  margin: 0 auto;

  width: 200px;
  height: 200px;
`;

const P_Name = styled.p`
  margin: 0 auto;

  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

const Div_Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Div_Close = styled.div`
  display: flex;
  justify-content: end;
`;

const P_Close = styled.p`
  width: 25px;
  height: 25px;

  cursor: pointer;
`;
