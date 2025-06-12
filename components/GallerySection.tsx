"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  Box,
  GridCol,
  Stack,
  Card,
} from "@mantine/core";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Restaurant Interior",
  },
  {
    src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Signature Dish",
  },
  {
    src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Wine Selection",
  },
  {
    src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Chef Preparation",
  },
  {
    src: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Plated Dish",
  },
  {
    src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Dining Experience",
  },
];

export function GallerySection() {
  return (
    <Box id="gallery" className="section-bg-alt" py={80}>
      <Container size="lg">
        <Stack gap="xl" align="center" mb={60}>
          <Text
            size="lg"
            className="gold-accent"
            fw={400}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.1em" }}
          >
            GALLERY
          </Text>
          <Title
            order={2}
            size="3rem"
            c="cream.0"
            ta="center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            A Visual Journey
          </Title>
          <Text size="lg" c="gray.3" ta="center" maw={600}>
            Step inside our historic theater setting and experience the artistry
            of our culinary creations.
          </Text>
        </Stack>

        <Grid>
          {galleryImages.map((image, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                style={{
                  height: 300,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
                className="transition duration-150 ease-in-out hover:scale-102"
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3))",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="hover:opacity-100"
                />
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
