import React, { FC, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../store";
import { searchWord } from "../../store/modules/result/action-creator";
import { useDispatch } from "react-redux";
import Loader from "../../components/loader";
import { ErrorSnackbar } from "../../components/error-snackbar";
import ROUTES from "../../constants/routes";
import { IResponse } from "../../store/modules/result/api";

const Result: FC = () => {
  const { word } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const wordList = useTypedSelector<IResponse[]>(
    ({ results }) => results.wordList
  );

  const error = useTypedSelector(({ results }) => results.error);

  useEffect(() => {
    if (word) {
      dispatch(searchWord(word));
    }
  }, [word]);

  useEffect(() => {
    if (error) {
      history(ROUTES.NOT_FOUND);
    }
  }, [error]);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Loader />
      <ErrorSnackbar />
      {wordList.map(({ word, origin, phonetics, meanings }, i) => (
        <Card key={i} sx={{ width: 550, marginTop: "30px" }}>
          <CardContent>
            <Loader />
            <ErrorSnackbar />

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              {word}
              {phonetics.map(({ text, audio }, i) => (
                <Box component="div" key={i}>
                  <Typography component="span">[ {text} ] </Typography>

                  {audio && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => new Audio(audio).play()}
                    >
                      <PlayArrowIcon />
                    </Button>
                  )}
                </Box>
              ))}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {origin}
            </Typography>

            <Box component="div">
              {meanings.map(({ partOfSpeech, definitions }, i) => (
                <Box component="div" key={i}>
                  <Typography key={i} gutterBottom variant="h5" component="div">
                    {partOfSpeech}
                  </Typography>

                  {definitions.map(
                    ({ definition, example, synonyms, antonyms }, i) => (
                      <Box component="div" key={i}>
                        <Typography variant="body2" color="text.secondary">
                          Definition: {definition}
                        </Typography>
                        <Typography component={"p"} variant={"body2"}>
                          Example: {example}
                        </Typography>
                        <Typography component={"p"} variant={"body2"}>
                          Synonyms:
                          {synonyms.map((el, i) => (
                            <Typography
                              key={i}
                              sx={{ wordBreak: "break-all" }}
                              component={"span"}
                              variant={"body2"}
                            >
                              {el},
                            </Typography>
                          ))}
                        </Typography>
                        <Typography component={"p"} variant={"body2"}>
                          Antonyms:
                          {antonyms.map((el, i) => (
                            <Typography
                              key={i}
                              component={"span"}
                              variant={"body2"}
                            >
                              {el}
                            </Typography>
                          ))}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Result;
