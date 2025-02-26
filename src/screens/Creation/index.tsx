import { FlatList } from "react-native";
import { Container } from "./styles";

import { MealsSelect } from "@components/MealsSelect";
import { HeaderCreateAndEdit } from "@components/HeaderCreateAndEdit";
import { useState } from "react";
import { Button } from "@components/Button";

export function Creation() {
  const [mealsDiet, setMealsDiet] = useState("");
  return (
    <Container>
      <HeaderCreateAndEdit title="Criar refeição" />
      <FlatList
        data={[
          { title: "Sim", type: "PRIMARY" },
          { title: "Não", type: "SECONDARY" },
        ]}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <MealsSelect
            title={item.title}
            type={item.type}
            isActive={item.title === mealsDiet}
            onPress={() => setMealsDiet(item.title)}
          />
        )}
        horizontal
      />
      <Button type="PRIMARY" title="Cadastrar refeição" />
    </Container>
  );
}
