import { Box, Card, Divider, Switch, Typography } from "@mui/material";

type SettingItemProps = {
  label: string;
  defaultChecked?: boolean;
};

function SettingItem({ label, defaultChecked = false }: SettingItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 1.5,
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          color: "#67748e",
          flex: 1,
        }}
      >
        {label}
      </Typography>

      <Switch defaultChecked={defaultChecked} />
    </Box>
  );
}

export default function PlatformSettings() {
  return (
    <Card
      sx={{
        p: 3,
        height:'100%'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: "#344767",
        }}
      >
        Platform Settings
      </Typography>

      <Typography
        variant="caption"
        sx={{
          fontWeight: 700,
          color: "#8392ab",
          display: "block",
          mb: 2,
          letterSpacing: ".5px",
        }}
      >
        ACCOUNT
      </Typography>

      <SettingItem label="Email me when someone follows me" defaultChecked />
      <SettingItem label="Email me when someone answers me" />
      <SettingItem label="Email me when someone mentions me" defaultChecked />

      <Divider sx={{ my: 3 }} />

      <Typography
        variant="caption"
        sx={{
          fontWeight: 700,
          color: "#8392ab",
          display: "block",
          mb: 2,
          letterSpacing: ".5px",
        }}
      >
        APPLICATION
      </Typography>

      <SettingItem label="New launches and projects" defaultChecked />
      <SettingItem label="Monthly product updates" />
      <SettingItem label="Subscribe to newsletter" defaultChecked />
    </Card>
  );
}