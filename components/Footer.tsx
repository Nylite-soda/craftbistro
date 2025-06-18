"use client";

import {
  Container,
  Group,
  Text,
  Stack,
  Box,
  Divider,
  Grid,
  GridCol,
} from "@mantine/core";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";

export function Footer() {
  return (
    <Box
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
        borderTop: "1px solid rgba(241, 211, 179, 0.2)",
      }}
      py={40}
    >
      <Container size="lg">
        <Grid>
          <GridCol span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Text
                size="xl"
                fw={700}
                className="!text-restaurant-gold transition duration-300 ease-in-out"
                style={{ fontFamily: "Georgia, serif" }}
              >
                SodaDine
              </Text>
              <Text size="sm" c="gray.3" style={{ lineHeight: 1.6 }}>
                Fine dining in the heart of Soda Avenue's historic theater.
                Experience culinary excellence in a setting rich with history
                and charm.
              </Text>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Text
                size="lg"
                fw={600}
                c="cream.0"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Contact Info
              </Text>
              <Stack gap="xs">
                <Group gap="xs">
                  <IconPhone size={16} color="var(--restaurant-gold)" />
                  <Text size="sm" c="gray.3">
                    (336) 846-4745
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconMail size={16} color="var(--restaurant-gold)" />
                  <Text size="sm" c="gray.3">
                    demo@sodadine.com
                  </Text>
                </Group>
                <Group gap="xs" align="flex-start">
                  <IconMapPin size={16} color="var(--restaurant-gold)" />
                  <Text size="sm" c="gray.3">
                    123 Soda Street
                    <br />
                    Soda Avenue, NC
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Text
                size="lg"
                fw={600}
                c="cream.0"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Hours
              </Text>
              <Stack gap="xs">
                <Group justify="space-between">
                  <Text size="sm" c="gray.3">
                    Tuesday - Thursday
                  </Text>
                  <Text size="sm" c="cream.0">
                    5:00 PM - 10:00 PM
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="gray.3">
                    Friday - Saturday
                  </Text>
                  <Text size="sm" c="cream.0">
                    5:00 PM - 11:00 PM
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="gray.3">
                    Sunday
                  </Text>
                  <Text size="sm" c="cream.0">
                    5:00 PM - 9:00 PM
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="gray.3">
                    Monday
                  </Text>
                  <Text size="sm" c="cream.0">
                    Closed
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </GridCol>
        </Grid>

        <Divider my="xl" color="rgba(241, 211, 179, 0.2)" />

        <Group justify="space-between" align="center">
          <Text size="sm" c="gray.4">
            © 2024 SodaDine. All rights reserved.
          </Text>
          <Text size="sm" c="gray.4">
            Crafted with passion in Soda Avenue, NC
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
