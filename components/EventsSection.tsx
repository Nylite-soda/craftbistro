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
  IconCalendar,
  IconClock,
  IconMusic,
  IconGlass,
} from "@tabler/icons-react";

const events = [
  {
    title: "Wine Tasting Evening",
    date: "Every Friday",
    time: "7:00 PM - 9:00 PM",
    description:
      "Join our sommelier for an evening of wine education and tasting featuring selections from our curated cellar.",
    price: "$45 per person",
    icon: IconGlass,
    badge: "Weekly",
    image:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Live Jazz Nights",
    date: "Every Saturday",
    time: "8:00 PM - 11:00 PM",
    description:
      "Experience the magic of live jazz in our historic theater setting with local and touring musicians.",
    price: "No cover charge",
    icon: IconMusic,
    badge: "Weekly",
    image:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Chef's Table Experience",
    date: "First Sunday of Month",
    time: "6:00 PM - 9:00 PM",
    description:
      "An intimate dining experience where our chef prepares a special menu right before your eyes.",
    price: "$125 per person",
    icon: IconCalendar,
    badge: "Monthly",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function EventsSection() {
  return (
    <Box id="events" className="section-bg-alt" py={80}>
      <Container size="lg">
        <Stack gap="xl" align="center" mb={60}>
          <Text
            size="lg"
            className="text-restaurant-gold transition duration-300 ease-in-out"
            fw={400}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.1em" }}
          >
            SPECIAL EVENTS
          </Text>
          <Title
            order={2}
            size="3rem"
            c="cream.0"
            ta="center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Memorable Experiences
          </Title>
          <Text size="lg" c="gray.3" ta="center" maw={600}>
            Join us for special events that combine exceptional cuisine with
            entertainment in our unique historic setting.
          </Text>
        </Stack>

        <Grid>
          {events.map((event, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card
                className="menu-card"
                p={0}
                radius="md"
                style={{ overflow: "hidden", height: "100%" }}
              >
                <Box
                  style={{
                    height: 200,
                    backgroundImage: `url(${event.image})`,
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
                    }}
                  />
                  <Group
                    justify="space-between"
                    align="flex-start"
                    p="md"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <Badge
                      h="1.5rem"
                      color="gold.4"
                      variant="filled"
                      c="var(--restaurant-burgundy)"
                      leftSection={<event.icon size={14} />}
                    >
                      {event.badge}
                    </Badge>
                  </Group>
                </Box>

                <Stack p="lg" gap="sm" style={{ flex: 1 }}>
                  <Title
                    order={3}
                    size="lg"
                    c="cream.0"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {event.title}
                  </Title>

                  <Group gap="xs">
                    <IconCalendar size={16} color="var(--restaurant-gold)" />
                    <Text size="sm" c="gray.3">
                      {event.date}
                    </Text>
                  </Group>

                  <Group gap="xs">
                    <IconClock size={16} color="var(--restaurant-gold)" />
                    <Text size="sm" c="gray.3">
                      {event.time}
                    </Text>
                  </Group>

                  <Group className="flex flex-col justify-between h-full">
                    <Text
                      c="gray.3"
                      size="sm"
                      style={{ lineHeight: 1.6 }}
                      lineClamp={3}
                      className="flex !justify-items-start !items-start"
                    >
                      {event.description}
                    </Text>
                    <Text
                      size="lg"
                      fw={600}
                      className="text-restaurant-gold transition duration-300 ease-in-out"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {event.price}
                    </Text>
                  </Group>

                  <Button
                    variant="outline"
                    color="gold.4"
                    fullWidth
                    h="5rem"
                    mt={0}
                    style={{
                      borderColor: "var(--restaurant-gold)",
                      color: "var(--restaurant-gold)",
                    }}
                    className="hover:!bg-restaurant-gold hover:!text-restaurant-brown animate-glow"
                  >
                    Learn More
                  </Button>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
