"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Group,
  Stack,
  Tabs,
  Box,
  GridCol,
  TabsTab,
  TabsList,
  TabsPanel,
  Badge,
} from "@mantine/core";
import {
  IconLeaf,
  IconFish,
  IconMeat,
  IconCake,
  IconSparkles,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const menuCategories = [
  {
    id: "appetizers",
    name: "Appetizers",
    icon: IconLeaf,
    color: "#10b981",
    items: [
      {
        name: "Pan-Seared Scallops",
        description: "Cauliflower purée, pancetta, microgreens",
        price: "$18",
        popular: true,
        image:
          "https://media.istockphoto.com/id/172953898/photo/pan-seared-sea-scallops.jpg?b=1&s=612x612&w=0&k=20&c=nzqr4NbijPET4UzywYn_c7HxZk8QnF2AvmrCzyxWGWM=",
      },
      {
        name: "Charcuterie Board",
        description: "Local cheeses, cured meats, seasonal accompaniments",
        price: "$24",
        popular: false,
        image:
          "https://media.istockphoto.com/id/1400291102/photo/different-tasty-appetizers-on-wooden-table-flat-lay.jpg?b=1&s=612x612&w=0&k=20&c=u5pw-9ckwHjWsxncJmsAaOfHMRyOD6Lq33GKCPFWqKo=",
      },
      {
        name: "Burrata & Heirloom Tomatoes",
        description: "Basil oil, aged balsamic, sourdough crostini",
        price: "$16",
        popular: true,
        image:
          "https://images.pexels.com/photos/19808760/pexels-photo-19808760/free-photo-of-pizza-with-egg-benedict-and-arugula.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls, truffle oil, parmesan",
        price: "$14",
        popular: false,
        image:
          "https://images.pexels.com/photos/5056867/pexels-photo-5056867.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    icon: IconMeat,
    color: "#dc2626",
    items: [
      {
        name: "Dry-Aged Ribeye",
        description:
          "14oz, truffle butter, roasted bone marrow, seasonal vegetables",
        price: "$52",
        popular: true,
        image:
          "https://images.pexels.com/photos/6542787/pexels-photo-6542787.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Duck Confit",
        description: "Cherry gastrique, wild rice pilaf, Brussels sprouts",
        price: "$34",
        popular: false,
        image:
          "https://images.pexels.com/photos/14537662/pexels-photo-14537662.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Braised Short Rib",
        description:
          "Red wine reduction, garlic mashed potatoes, root vegetables",
        price: "$36",
        popular: true,
        image:
          "https://media.istockphoto.com/id/636683152/photo/dinner.jpg?b=1&s=612x612&w=0&k=20&c=C2DLaQJqGH3ig8IxgzqxA0kblFvJezCHOewKAC1bOug=",
      },
      {
        name: "Rack of Lamb",
        description: "Herb crust, mint chimichurri, roasted fingerlings",
        price: "$42",
        popular: false,
        image:
          "https://images.pexels.com/photos/11795635/pexels-photo-11795635.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    icon: IconFish,
    color: "#0ea5e9",
    items: [
      {
        name: "Pan-Roasted Salmon",
        description: "Lemon herb crust, quinoa tabbouleh, cucumber yogurt",
        price: "$28",
        popular: true,
        image:
          "https://images.pexels.com/photos/3490368/pexels-photo-3490368.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Lobster Thermidor",
        description: "Cognac cream sauce, gruyère, herb breadcrumbs",
        price: "$42",
        popular: true,
        image:
          "https://media.istockphoto.com/id/1285543516/photo/lobster-thermidor-served-with-glazed-potato-and-asparagus-in-a-platter-black-background.jpg?b=1&s=612x612&w=0&k=20&c=s-7YfbZ4Gw_agCsJjFm96Nxb00_FmqTMccunQpXmXog=",
      },
      {
        name: "Seared Halibut",
        description: "Brown butter, capers, fingerling potatoes, asparagus",
        price: "$32",
        popular: false,
        image:
          "https://images.pexels.com/photos/19001607/pexels-photo-19001607/free-photo-of-salmon-served-with-rice-and-salad-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Cioppino",
        description: "Mussels, clams, shrimp, fennel, sourdough",
        price: "$29",
        popular: false,
        image:
          "https://media.istockphoto.com/id/1175609923/photo/seafood-casserole-bowl.jpg?b=1&s=612x612&w=0&k=20&c=4knRna4ceHGBbay7k2x8NsZUgZYmcWBq_HqXlHChHyk=",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: IconCake,
    color: "#f59e0b",
    items: [
      {
        name: "Chocolate Soufflé",
        description: "Valrhona chocolate, vanilla bean ice cream",
        price: "$14",
        popular: true,
        image:
          "https://images.pexels.com/photos/28625346/pexels-photo-28625346/free-photo-of-cozy-indulgence-enjoying-chocolate-dessert-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Crème Brûlée",
        description: "Madagascar vanilla, seasonal berries",
        price: "$12",
        popular: true,
        image:
          "https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Apple Tarte Tatin",
        description: "Caramelized apples, puff pastry, cinnamon ice cream",
        price: "$13",
        popular: false,
        image:
          "https://images.pexels.com/photos/6148265/pexels-photo-6148265.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
        price: "$11",
        popular: false,
        image:
          "https://images.pexels.com/photos/29721415/pexels-photo-29721415/free-photo-of-elegant-tiramisu-cake-with-ladyfingers.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
];

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("appetizers");
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  const handleTabChange = (value: string | null) => {
    if (value) {
      setActiveTab(value);
      setVisibleItems([]);
      setTimeout(() => {
        const items =
          menuCategories.find((cat) => cat.id === value)?.items || [];
        items.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, `${value}-${index}`]);
          }, index * 100);
        });
      }, 100);
    }
  };

  return (
    <Box id="menu" className="section-bg relative" py={100}>
      <Container size="lg">
        <Stack gap="xl" align="center" mb={60}>
          <Text
            size="lg"
            className="text-restaurant-gold transition duration-300 ease-in-out animate-fade-in-up"
            fw={400}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.1em" }}
          >
            Our Menu
          </Text>
          <Title
            order={2}
            size="3rem"
            c="cream.0"
            ta="center"
            className="animate-fade-in-up animate-delay-200"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Culinary Excellence
          </Title>
          <Text
            size="lg"
            c="gray.3"
            ta="center"
            maw={700}
            className="animate-fade-in-up animate-delay-400"
            style={{ lineHeight: 1.4 }}
          >
            Our menu changes seasonally to showcase the finest local ingredients
            and reflect our commitment to culinary innovation.
          </Text>
        </Stack>

        <Tabs
          defaultValue="appetizers"
          value={activeTab}
          onChange={handleTabChange}
          variant="pills"
          className="animate-fade-in-up animate-delay-600"
        >
          <TabsList justify="center" mb="xl" className="bg-transparent gap-4">
            {menuCategories.map((category) => (
              <TabsTab
                key={category.id}
                value={category.id}
                leftSection={
                  <category.icon size={18} style={{ color: category.color }} />
                }
                style={{
                  color: "var(--restaurant-cream)",
                  backgroundColor: "rgba(45, 45, 45, 0.5)",
                  border: "1px solid rgba(241, 211, 179, 0.2)",
                  borderRadius: "15px",
                  backdropFilter: "blur(10px)",
                }}
                data-active={activeTab === category.id}
                className={`interactive-button px-6 py-2 font-semibold" ${
                  activeTab === category.id &&
                  "!bg-restaurant-gold !text-restaurant-brown !border-restaurant-brown"
                }`}
              >
                {category.name}
              </TabsTab>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsPanel key={category.id} value={category.id}>
              <Grid>
                {category.items.map((item, index) => (
                  <GridCol key={index} span={{ base: 12, md: 6 }}>
                    <Card
                      className="menu-card interactive-card fade-in-on-scroll stagger-item"
                      p={0}
                      radius="lg"
                      style={{
                        overflow: "hidden",
                        height: "100%",
                        background: "rgba(26, 26, 26, 0.8)",
                        border: "1px solid rgba(241, 211, 179, 0.2)",
                        backdropFilter: "blur(15px)",
                      }}
                    >
                      {/* Image Section */}
                      <Box
                        style={{
                          height: 200,
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          position: "relative",
                        }}
                      >
                        <Box
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))",
                          }}
                        />

                        {item.popular && (
                          <Badge
                            color="gold.4"
                            variant="filled"
                            leftSection={<IconSparkles size={14} />}
                            className="absolute top-4 left-4 animate-glow"
                            style={{
                              background:
                                "linear-gradient(45deg, var(--restaurant-gold), var(--restaurant-gold-light))",
                              color: "var(--restaurant-brown)",
                            }}
                          >
                            Popular
                          </Badge>
                        )}

                        <Text
                          size="2xl"
                          fw={700}
                          className="text-restaurant-gold transition duration-300 ease-in-out absolute bottom-2 right-4"
                          style={{
                            fontFamily: "Georgia, serif",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          {item.price}
                        </Text>
                      </Box>

                      {/* Content Section */}
                      <Stack p="xl" gap="md">
                        <Title
                          order={3}
                          size="xl"
                          c="cream.0"
                          className="hover:text-restaurant-gold transition-colors duration-300"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {item.name}
                        </Title>
                        <Text
                          c="gray.3"
                          size="md"
                          style={{ lineHeight: 1.7 }}
                          className="hover:text-gray-200 transition-colors duration-300"
                        >
                          {item.description}
                        </Text>
                      </Stack>

                      {/* <Group justify="space-between" align="flex-start" mb="sm">
                        <Text
                          size="lg"
                          fw={600}
                          c="cream.0"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          size="lg"
                          fw={700}
                          className="text-restaurant-gold transition duration-300 ease-in-out"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {item.price}
                        </Text>
                      </Group>
                      <Text c="gray.3" size="sm" style={{ lineHeight: 1.5 }}>
                        {item.description}
                      </Text> */}
                    </Card>
                  </GridCol>
                ))}
              </Grid>
            </TabsPanel>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
}
