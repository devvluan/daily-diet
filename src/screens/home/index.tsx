import { FlatList } from "react-native";

import { Container, TitleMeals, ViewMeals } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { DietProgressCard } from "@components/DietProgressCard";
import { MealsGroupsProps, MealsList } from "@components/MealsList";

export function Home() {
  const groups: MealsGroupsProps[] = [
    {
      id: "1",
      group: [
        { id: "1", hour: "20:00", title: "X-Tudo", type: "SECONDARY" },
        {
          id: "2",
          hour: "16:00",
          title: "Whey protein com leite",
          type: "PRIMARY",
        },
        {
          id: "3",
          hour: "12:30",
          title: "Salada cesar com frango e peixe e uauuu",
          type: "PRIMARY",
        },
        {
          id: "4",
          hour: "09:30",
          title: "Vitamina de banana com banana",
          type: "PRIMARY",
        },
      ],
      created_at: "12.08.22",
    },
    {
      id: "2",
      group: [
        { id: "1", hour: "20:00", title: "X-Tudo", type: "SECONDARY" },
        {
          id: "2",
          hour: "16:00",
          title: "Whey protein com leite",
          type: "PRIMARY",
        },
        {
          id: "3",
          hour: "12:30",
          title: "Salada cesar com frango e peixe e uauuu",
          type: "PRIMARY",
        },
        {
          id: "4",
          hour: "09:30",
          title: "Vitamina de banana",
          type: "PRIMARY",
        },
      ],
      created_at: "11.08.22",
    },
  ];

  return (
    <Container>
      <Header />

      <DietProgressCard
        percentage="90,86"
        subtitle="das refeições dentro da dieta"
        type="PRIMARY"
      />

      <ViewMeals>
        <TitleMeals>Refeições</TitleMeals>
        <Button icon="add" title="Nova refeição" />
      </ViewMeals>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealsList groups={[item]} date={item.created_at} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
