"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Group,
  Stack,
  Box,
  GridCol,
  Badge,
  Button,
} from "@mantine/core";
import {
  IconChefHat,
  IconFlame,
  IconLeaf,
  IconSparkles,
  IconHeart,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const specials = [
  {
    name: "Chef's Tasting Menu",
    description:
      "A seven-course journey through our seasonal favorites, featuring locally sourced ingredients and innovative techniques.",
    price: "$85",
    badge: "Chef's Choice",
    icon: IconChefHat,
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#8b5cf6",
    features: ["7 Courses", "Wine Pairing", "Seasonal"],
  },
  {
    name: "Wagyu Beef Tenderloin",
    description:
      "Premium A5 Wagyu with roasted bone marrow, truffle jus, and seasonal root vegetables.",
    price: "$68",
    badge: "Premium",
    icon: IconFlame,
    image:
      "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#ef4444",
    features: ["A5 Wagyu", "Truffle Jus", "Premium Cut"],
  },
  {
    name: "Farm-to-Table Vegetarian",
    description:
      "Seasonal vegetable medley with quinoa, roasted nuts, and herb-infused olive oil.",
    price: "$32",
    badge: "Seasonal",
    icon: IconLeaf,
    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#10b981",
    features: ["Farm Fresh", "Organic", "Vegan Option"],
  },
];

export function ChefSpecialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

    const elements = document.querySelectorAll(".scale-in-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="specials"
      className="section-bg-alt relative overflow-hidden"
      py={100}
    >
      <div className="absolute top-20 right-20 w-64 h-64 bg-restaurant-burgundy/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-restaurant-gold/10 rounded-full blur-2xl animate-float animate-delay-400" />
      <Container size="lg">
        <Stack gap="xl" align="center" mb={60}>
          <Text
            size="lg"
            className="text-restaurant-gold transition duration-300 ease-in-out scale-in-on-scroll"
            fw={400}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}
          >
            CHEF'S SPECIALS
          </Text>
          <Title
            order={2}
            size="3rem"
            c="cream.0"
            ta="center"
            className="scale-in-on-scroll"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Signature Creations
          </Title>
          <Text
            size="lg"
            c="gray.3"
            ta="center"
            maw={700}
            className="scale-in-on-scroll"
            style={{ lineHeight: 1.5 }}
          >
            Our chef's carefully crafted specialties, featuring the finest
            ingredients and innovative culinary techniques that define our
            unique dining experience.
          </Text>
        </Stack>

        <Grid>
          {specials.map((special, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card
                className="interactive-card scale-in-on-scroll"
                p={0}
                radius="lg"
                style={{
                  overflow: "hidden",
                  height: "100%",
                  background: "rgba(26, 26, 26, 0.9)",
                  border: "2px solid rgba(241, 211, 179, 0.2)",
                  backdropFilter: "blur(20px)",
                  transform:
                    hoveredCard === index
                      ? "scale(1.02) translateY(-5px)"
                      : "scale(1)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Box
                  style={{
                    height: 200,
                    backgroundImage: `url(${special.image})`,
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
                        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                      transition: "all 0.3s ease",
                    }}
                  />
                  {/* <Group
                    justify="space-between"
                    align="flex-start"
                    p="md"
                    style={{ position: "relative", zIndex: 1, height: "100%" }}
                  > */}
                  <Badge
                    variant="filled"
                    h="1.5rem"
                    leftSection={
                      <special.icon
                        size={14}
                        className="animate-pulse-custom"
                      />
                    }
                    // p="xs"
                    className="absolute top-6 left-6 animate-glow flex items-center justify-center"
                    style={{
                      background: `linear-gradient(45deg, ${special.color}, ${special.color}dd)`,
                      color: "white",
                      fontSize: "0.8rem",
                      // padding: "8px 16px",
                      // borderRadius: "20px",
                      boxShadow: `0 4px 20px ${special.color}40`,
                    }}
                  >
                    {special.badge}
                  </Badge>
                  <Box
                    // p="xs"
                    className="absolute bottom-4 right-6 animate-glow"
                    style={{
                      // background: "rgba(0,0,0,0.8)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      padding: "0.3rem 0.65rem",
                      border: "1.5px solid var(--restaurant-gold)",
                    }}
                  >
                    <Text
                      size="2xl"
                      fw={700}
                      className="text-restaurant-gold transition duration-300 ease-in-out"
                      style={{
                        fontFamily: "Georgia, serif",
                        textShadow: "0 0 20px rgba(241, 211, 179, 0.8)",
                      }}
                    >
                      {special.price}
                    </Text>
                  </Box>
                </Box>

                <Stack p="lg" gap="sm">
                  <Title
                    order={3}
                    size="lg"
                    c="cream.0"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {special.name}
                  </Title>
                  <Text
                    lineClamp={3}
                    c="gray.3"
                    size="sm"
                    style={{ lineHeight: 1.6 }}
                  >
                    {special.description}
                  </Text>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
