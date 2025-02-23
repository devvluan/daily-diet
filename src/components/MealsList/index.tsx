import { FlatList } from "react-native";
import { Container, Title } from "./styles";
import { MealsCard } from "@components/MealsCard";

export interface MealsGroupsProps {
  id: string;
  group: {
    id: string;
    hour: string;
    title: string;
    type: "PRIMARY" | "SECONDARY";
  }[];
  created_at: string;
}

type Props = {
  date: string;
  groups: MealsGroupsProps[];
};

export function MealsList({ date, groups }: Props) {
  return (
    <Container>
      <Title>{date}</Title>
      <FlatList
        data={groups.flatMap((group) => group.group)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealsCard hour={item.hour} title={item.title} type={item.type} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 8 }}
      />
    </Container>
  );
}
