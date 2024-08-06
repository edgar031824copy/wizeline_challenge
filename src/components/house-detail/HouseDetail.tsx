import {
  Skeleton,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useSwornMembers } from "../../services/hooks";
import { FC } from "react";

type Props = {
  house: Record<string, any>;
};

export const HouseDetail: FC<Props> = ({ house }) => {
  const {
    data: swornMembers,
    isLoading,
    isError,
  } = useSwornMembers(house.swornMembers);

  if (isLoading) {
    return <Skeleton width={150} height={50} />;
  }

  if (isError) {
    return <Typography color="error">Error fetching members</Typography>;
  }

  return (
    <Card
      variant="outlined"
      sx={{
        height: 300,
        width: 250,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          maxHeight: 300,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <Typography variant="h5">{house.name}</Typography>
        {!!swornMembers?.length ? (
          <List>
            {swornMembers?.map((member: any) => (
              <ListItem key={member.url}>
                <ListItemText
                  primary={member.name}
                  secondary={
                    !member.died ? "Alive" : `Dead reason: ${member.died}`
                  }
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ margin: "auto" }}
          >
            This house has no sworn members
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
