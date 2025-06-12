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
  Avatar,
} from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Boone, NC",
    rating: 5,
    text: "Absolutely incredible dining experience! The atmosphere in the historic theater is magical, and every dish was a work of art. The service was impeccable.",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Michael Chen",
    location: "Charlotte, NC",
    rating: 5,
    text: "Chef's tasting menu was phenomenal. Each course told a story, and the wine pairings were perfect. This is destination dining at its finest.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Emily Rodriguez",
    location: "Asheville, NC",
    rating: 5,
    text: "The perfect spot for our anniversary dinner. The ambiance, food, and service exceeded all expectations. We'll definitely be back!",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

export function TestimonialsSection() {
  return (
    <Box id="testimonials" className="section-bg" py={80}>
      <Container size="lg">
        <Stack gap="xl" align="center" mb={60}>
          <Text
            size="lg"
            className="gold-accent"
            fw={400}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.1em" }}
          >
            TESTIMONIALS
          </Text>
          <Title
            order={2}
            size="3rem"
            c="cream.0"
            ta="center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What Our Guests Say
          </Title>
          <Text size="lg" c="gray.3" ta="center" maw={600}>
            Don't just take our word for it. Here's what our valued guests have
            to say about their dining experience.
          </Text>
        </Stack>

        <Grid>
          {testimonials.map((testimonial, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card
                className="menu-card"
                p="lg"
                radius="md"
                style={{ height: "100%" }}
              >
                <Stack
                  gap="md"
                  className="flex flex-col justify-between h-full"
                >
                  <Group gap="xs">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IconStar
                        key={i}
                        size={16}
                        className="fill-restaurant-gold text-restaurant-gold"
                      />
                    ))}
                  </Group>

                  <Text
                    c="gray.3"
                    size="sm"
                    style={{ lineHeight: 1.6, fontStyle: "italic" }}
                  >
                    "{testimonial.text}"
                  </Text>

                  <Group gap="sm" mt="auto">
                    <Avatar src={testimonial.avatar} size="sm" radius="xl" />
                    <Stack gap={0}>
                      <Text size="sm" fw={600} c="cream.0">
                        {testimonial.name}
                      </Text>
                      <Text size="xs" c="gray.4" lineClamp={4}>
                        {testimonial.location}
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
