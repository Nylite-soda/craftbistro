"use client";

import {
  AppShell,
  Burger,
  Group,
  Text,
  Drawer,
  Stack,
  Button,
  Container,
  Box,
  AppShellHeader,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPhone, IconMail } from "@tabler/icons-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Specials", href: "#specials" },
  { name: "Reservations", href: "#reservations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  return (
    <>
      <AppShellHeader
        style={{
          background: "rgba(26, 26, 26, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(241, 211, 179, 0.2)",
        }}
      >
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between">
            {/* Logo */}
            <Group>
              <Text
                size="xl"
                fw={700}
                style={{
                  fontFamily: "Georgia, serif",
                  color: "var(--restaurant-gold)",
                  textShadow: "0 0 10px rgba(241, 211, 179, 0.3)",
                }}
              >
                Craft Bistro
              </Text>
            </Group>

            {/* Desktop Navigation */}
            <Group gap="sm" visibleFrom="md">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="subtle"
                  color="gold.4"
                  onClick={() => scrollToSection(item.href)}
                  style={{
                    color: "var(--restaurant-cream)",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Group>

            {/* Contact Info & Mobile Menu */}
            <Group>
              <Group gap="md" visibleFrom="lg">
                <Group gap="xs">
                  <IconPhone size={16} color="var(--restaurant-gold)" />
                  <Text size="sm" c="cream.0">
                    (336) 846-4745
                  </Text>
                </Group>
              </Group>

              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                size="sm"
                color="var(--restaurant-gold)"
              />
            </Group>
          </Group>
        </Container>
      </AppShellHeader>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title={
          <Text
            size="lg"
            fw={700}
            style={{
              fontFamily: "Georgia, serif",
              color: "var(--restaurant-gold)",
            }}
          >
            Craft Bistro
          </Text>
        }
        padding="md"
        size="sm"
        styles={{
          content: {
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          },
          header: {
            background: "transparent",
            borderBottom: "1px solid rgba(241, 211, 179, 0.2)",
          },
        }}
      >
        <Stack gap="md">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="subtle"
              color="gold.4"
              fullWidth
              justify="flex-start"
              onClick={() => scrollToSection(item.href)}
              style={{
                color: "var(--restaurant-cream)",
                fontWeight: 500,
              }}
            >
              {item.name}
            </Button>
          ))}

          <Box
            mt="md"
            pt="md"
            style={{ borderTop: "1px solid rgba(241, 211, 179, 0.2)" }}
          >
            <Group gap="xs" mb="sm">
              <IconPhone size={16} color="var(--restaurant-gold)" />
              <Text size="sm" c="cream.0">
                (336) 846-4745
              </Text>
            </Group>
            <Group gap="xs">
              <IconMail size={16} color="var(--restaurant-gold)" />
              <Text size="sm" c="cream.0">
                info@craftbistro.com
              </Text>
            </Group>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
