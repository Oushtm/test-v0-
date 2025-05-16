"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Badge,
  Button,
  InputBase,
  MenuItem,
  Menu,
  Modal,
  Select,
  FormControl,
  InputLabel,
  Fade,
  Slide,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Apartment as ApartmentIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  AccountCircle,
  BarChart as BarChartIcon,
  CheckCircle,
  HourglassEmpty,
  ExitToApp as LogoutIcon,
  Add as AddIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Mock data
const initialRequests = [
  {
    id: 1,
    name: "Yassine El Amrani",
    email: "yassine@example.com",
    phone: "+212 6 12 34 56 78",
    propertyType: "Villa",
    rooms: 5,
    city: "Casablanca",
    estimatedPrice: "4,200,000 MAD",
    status: "In Progress",
    date: "2023-05-10",
  },
  {
    id: 2,
    name: "Fatima Benali",
    email: "fatima@example.com",
    phone: "+212 6 98 76 54 32",
    propertyType: "Apartment",
    rooms: 3,
    city: "Rabat",
    estimatedPrice: "1,850,000 MAD",
    status: "Pending",
    date: "2023-05-12",
  },
  {
    id: 3,
    name: "Mohammed Tazi",
    email: "mohammed@example.com",
    phone: "+212 7 11 22 33 44",
    propertyType: "Studio",
    rooms: 1,
    city: "Marrakech",
    estimatedPrice: "980,000 MAD",
    status: "Completed",
    date: "2023-05-08", 
  },
  {
    id: 4,
    name: "Laila Ziani",
    email: "laila@example.com",
    phone: "+212 6 55 44 33 22",
    propertyType: "Villa",
    rooms: 4,
    city: "Tanger",
    estimatedPrice: "2,950,000 MAD",
    status: "Completed",
    date: "2023-05-05",
  },
  {
    id: 5,
    name: "Karim Alaoui",
    email: "karim@example.com",
    phone: "+212 7 88 99 00 11",
    propertyType: "Apartment",
    rooms: 2,
    city: "Agadir",
    estimatedPrice: "1,320,000 MAD",
    status: "Pending",
    date: "2023-05-14",
  },
];

const pieData = [
  { name: 'Pending', value: initialRequests.filter(r => r.status === 'Pending').length },
  { name: 'Completed', value: initialRequests.filter(r => r.status === 'Completed').length },
];
const pieColors = ['#fbbf24', '#22c55e'];

const cityData = [
  { name: 'Casablanca', count: initialRequests.filter(r => r.city === 'Casablanca').length },
  { name: 'Rabat', count: initialRequests.filter(r => r.city === 'Rabat').length },
  { name: 'Marrakech', count: initialRequests.filter(r => r.city === 'Marrakech').length },
  { name: 'Tanger', count: initialRequests.filter(r => r.city === 'Tanger').length },
  { name: 'Agadir', count: initialRequests.filter(r => r.city === 'Agadir').length },
];

const drawerWidth = 240;

const statusOptions = [
  "Pending",
  "In Progress",
  "Contacted",
  "Completed",
  "Cancelled",
];

// Add a mock admin profile and recent activity
const adminProfile = {
  name: "Sami Admin",
  role: "Administrator",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  lastLogin: "2024-06-10 09:15",
};

const recentActivity = [
  { id: 1, text: "Yassine El Amrani a ajouté une nouvelle propriété à Casablanca.", time: "2 min ago" },
  { id: 2, text: "Fatima Benali a mis à jour le statut de sa demande.", time: "10 min ago" },
  { id: 3, text: "Mohammed Tazi a été contacté.", time: "1 hour ago" },
  { id: 4, text: "Laila Ziani a complété une demande d'estimation.", time: "Yesterday" },
];

export default function AdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [colorMode, setColorMode] = useState('dark');
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);
  const [search, setSearch] = useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleStatusChange = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  const handleOpenModal = (request) => {
    setSelectedRequest(request);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRequest(null);
  };

  const handleNotifOpen = (event) => setNotifAnchorEl(event.currentTarget);
  const handleNotifClose = () => setNotifAnchorEl(null);

  const filteredRequests = requests.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.email.toLowerCase().includes(search.toLowerCase()) ||
    r.city.toLowerCase().includes(search.toLowerCase()) ||
    r.propertyType.toLowerCase().includes(search.toLowerCase())
  );

  const drawer = (
    <Box sx={{ pt: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        mb: 3,
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
        py: 2,
        borderRadius: 2,
        mx: 2
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700, 
            background: 'linear-gradient(to right, #60a5fa, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          RENTABILIO
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        <ListItem button selected sx={{
          mx: 1,
          borderRadius: 2,
          mb: 1,
          '&.Mui-selected': {
            background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.15))',
          }
        }}>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#60a5fa" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ApartmentIcon />
          </ListItemIcon>
          <ListItemText primary="Properties" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Topbar */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: { xs: 0, sm: `${drawerWidth}px` },
        right: 0,
        height: 64,
        zIndex: 1201,
        bgcolor: 'rgba(15,23,42,0.95)',
        boxShadow: 3,
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, sm: 4 },
        justifyContent: 'space-between',
        borderBottom: '1.5px solid rgba(96,165,250,0.08)',
        backdropFilter: 'blur(8px)',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-1px', background: 'linear-gradient(to right, #60a5fa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: { xs: 'none', sm: 'block' } }}>
            RENTABILIO
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Notifications Bell */}
          <IconButton color="inherit" onClick={handleNotifOpen}>
            <Badge badgeContent={recentActivity.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu anchorEl={notifAnchorEl} open={Boolean(notifAnchorEl)} onClose={handleNotifClose} sx={{ mt: 1 }}>
            {recentActivity.length === 0 ? (
              <MenuItem disabled>No notifications</MenuItem>
            ) : (
              recentActivity.map((item) => (
                <MenuItem key={item.id} sx={{ minWidth: 250 }}>
                  <ListItemIcon><NotificationsIcon color="primary" fontSize="small" /></ListItemIcon>
                  <ListItemText primary={item.text} secondary={item.time} />
                </MenuItem>
              ))
            )}
          </Menu>
          {/* Color mode toggle */}
          <IconButton sx={{ ml: 1 }} onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} color="inherit">
            {colorMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {/* User menu */}
          <IconButton onClick={handleProfileMenuOpen} color="inherit">
            <Avatar src={adminProfile.avatar} sx={{ width: 36, height: 36 }} />
          </IconButton>
        </Box>
      </Box>
      {/* Sidebar with profile */}
      <Box
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          bgcolor: 'transparent',
          minHeight: '100vh',
          display: { xs: 'none', sm: 'block' },
          borderRight: '1.5px solid rgba(96,165,250,0.08)',
          background: 'linear-gradient(160deg, #0f172a 60%, #1e293b 100%)',
        }}
      >
        <Box sx={{ p: 3, pb: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mt: 8 }}>
          <Avatar src={adminProfile.avatar} sx={{ width: 64, height: 64, mb: 1, boxShadow: 2, border: '2.5px solid #60a5fa' }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>{adminProfile.name}</Typography>
          <Typography variant="body2" color="text.secondary">{adminProfile.role}</Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>Last login: {adminProfile.lastLogin}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        {drawer}
      </Box>
      {/* Main content */}
      <Box component="main" sx={{
        flexGrow: 1,
        maxWidth: 1200,
        mx: 'auto',
        pt: 12,
        pb: 6,
        px: { xs: 1, sm: 4 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>
        {/* Top stats cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              borderRadius: 5,
              background: 'rgba(30,41,59,0.6)',
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
              backdropFilter: 'blur(12px)',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 32px rgba(59,130,246,0.18)' },
            }}>
              <BarChartIcon sx={{ fontSize: 36, color: 'primary.main', mb: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>Total Requests</Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>{requests.length}</Typography>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>+15% from last month</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              borderRadius: 5,
              background: 'rgba(30,41,59,0.6)',
              boxShadow: '0 8px 32px 0 rgba(251,191,36,0.18)',
              backdropFilter: 'blur(12px)',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 32px rgba(251,191,36,0.18)' },
            }}>
              <BarChartIcon sx={{ fontSize: 36, color: '#fbbf24', mb: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>Pending</Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>{requests.filter(r => r.status === "Pending").length}</Typography>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>Needs attention</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              borderRadius: 5,
              background: 'rgba(30,41,59,0.6)',
              boxShadow: '0 8px 32px 0 rgba(34,197,94,0.18)',
              backdropFilter: 'blur(12px)',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 32px rgba(34,197,94,0.18)' },
            }}>
              <BarChartIcon sx={{ fontSize: 36, color: '#22c55e', mb: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>Completed</Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>{requests.filter(r => r.status === "Completed").length}</Typography>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>All good</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              borderRadius: 5,
              background: 'rgba(30,41,59,0.6)',
              boxShadow: '0 8px 32px 0 rgba(139,92,246,0.18)',
              backdropFilter: 'blur(12px)',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 32px rgba(139,92,246,0.18)' },
            }}>
              <BarChartIcon sx={{ fontSize: 36, color: 'secondary.main', mb: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>Avg. Property Value</Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>€620K</Typography>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>+5% from last month</Typography>
            </Card>
          </Grid>
        </Grid>
        {/* Charts in tabs (show both charts stacked for now) */}
        <Card sx={{
          borderRadius: 5,
          background: 'rgba(30,41,59,0.6)',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
          backdropFilter: 'blur(12px)',
          p: 3,
          mt: 2,
        }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Requests by City</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Requests by Status</Typography>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie 
                data={pieData} 
                dataKey="value" 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                outerRadius={80} 
                label={(entry) => entry.name}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
        {/* Requests Table */}
        <Card sx={{
          borderRadius: 5,
          background: 'rgba(30,41,59,0.6)',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
          backdropFilter: 'blur(12px)',
          p: 3,
          mt: 2,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Recent Requests</Typography>
            <Button 
              size="small" 
              sx={{ color: 'primary.main', fontWeight: 700 }}
            >
              View all
            </Button>
          </Box>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ background: 'rgba(96,165,250,0.08)' }}>
                  <TableCell>ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Property Type</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Estimated Price</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRequests.map((row, idx) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(96,165,250,0.03)',
                      transition: 'background 0.2s',
                      '&:hover': { background: 'rgba(96,165,250,0.10)' },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      #{row.id}
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ width: 30, height: 30, mr: 1, bgcolor: 'primary.main', boxShadow: 1 }}>
                          {row.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>{row.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{row.email}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{row.propertyType}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.estimatedPrice}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <FormControl size="small" fullWidth>
                        <Select
                          value={row.status}
                          onChange={e => handleStatusChange(row.id, e.target.value)}
                          sx={{ 
                            minWidth: 120, 
                            fontWeight: 700,
                            borderRadius: 2,
                            background: row.status === 'Completed' ? 'linear-gradient(90deg, #22c55e22, #22c55e11)' : row.status === 'Pending' ? 'linear-gradient(90deg, #fbbf2422, #fbbf2411)' : row.status === 'In Progress' ? 'linear-gradient(90deg, #60a5fa22, #60a5fa11)' : row.status === 'Contacted' ? 'linear-gradient(90deg, #8b5cf622, #8b5cf611)' : row.status === 'Cancelled' ? 'linear-gradient(90deg, #ef444422, #ef444411)' : undefined,
                          }}
                        >
                          {statusOptions.map(option => (
                            <MenuItem key={option} value={option} sx={{ fontWeight: 700 }}>
                              {option === 'Completed' && <CheckCircle sx={{ color: '#22c55e', mr: 1 }} fontSize="small" />}
                              {option === 'Pending' && <HourglassEmpty sx={{ color: '#fbbf24', mr: 1 }} fontSize="small" />}
                              {option === 'In Progress' && <BarChartIcon sx={{ color: '#60a5fa', mr: 1 }} fontSize="small" />}
                              {option === 'Contacted' && <PeopleIcon sx={{ color: '#8b5cf6', mr: 1 }} fontSize="small" />}
                              {option === 'Cancelled' && <LogoutIcon sx={{ color: '#ef4444', mr: 1 }} fontSize="small" />}
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <Button 
                        size="small" 
                        variant="outlined" 
                        sx={{ fontWeight: 700, borderRadius: 2 }}
                        onClick={() => handleOpenModal(row)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        {/* Modal for request details */}
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          closeAfterTransition
          aria-labelledby="request-details-title"
          aria-describedby="request-details-description"
        >
          <Fade in={modalOpen}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 420,
              bgcolor: 'rgba(30,41,59,0.95)',
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
              outline: 'none',
              border: '1.5px solid rgba(96,165,250,0.15)',
              backdropFilter: 'blur(12px)',
            }}>
              {selectedRequest && (
                <>
                  <Typography id="request-details-title" variant="h6" sx={{ mb: 2, fontWeight: 800, letterSpacing: '-0.5px' }}>
                    Request Details
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Client Information</Typography>
                  <Typography variant="body2">Name: {selectedRequest.name}</Typography>
                  <Typography variant="body2">Email: {selectedRequest.email}</Typography>
                  <Typography variant="body2">Phone: {selectedRequest.phone}</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Property Information</Typography>
                  <Typography variant="body2">Type: {selectedRequest.propertyType}</Typography>
                  <Typography variant="body2">Rooms: {selectedRequest.rooms}</Typography>
                  <Typography variant="body2">City: {selectedRequest.city}</Typography>
                  <Typography variant="body2">Estimated Price: {selectedRequest.estimatedPrice}</Typography>
                  <Typography variant="body2">Status: {selectedRequest.status}</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Contact Client</Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={`mailto:${selectedRequest.email}`}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: 2 }}
                    >
                      Email
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      href={`tel:${selectedRequest.phone}`}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: 2 }}
                    >
                      Call
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Fade>
        </Modal>
        {/* Floating Activity Feed Widget */}
        <Box sx={{
          position: 'fixed',
          right: 32,
          bottom: 32,
          width: 320,
          zIndex: 1300,
          display: { xs: 'none', md: 'block' },
        }}>
          <Card sx={{
            borderRadius: 4,
            background: 'rgba(30,41,59,0.85)',
            boxShadow: 6,
            backdropFilter: 'blur(10px)',
            p: 2,
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Recent Activity</Typography>
            <List dense>
              {recentActivity.map((item) => (
                <ListItem key={item.id} sx={{ py: 1, borderRadius: 2, '&:hover': { background: 'rgba(96,165,250,0.08)' } }}>
                  <ListItemIcon>
                    <NotificationsIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item.text} secondary={item.time} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Box>
      </Box>
    </Box>
  );
} 