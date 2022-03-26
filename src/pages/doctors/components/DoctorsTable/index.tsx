/* eslint-disable quote-props */
import { FC, ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  CardHeader,
} from '@mui/material';

import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useNavigate } from 'react-router-dom';
import { IUser } from 'utils/types/db';
import Colors from 'theme/colors';

interface RecentUserTableProps {
  className?: string;
  users: IUser[];
}

const applyPagination = (
  users: IUser[],
  page: number,
  limit: number,
): IUser[] => {
  return users.slice(page * limit, page * limit + limit);
};

const RecentDoctorsTable: FC<RecentUserTableProps> = ({ users }) => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value, 10));
  };

  const paginatedUsers = applyPagination(users, page, limit);
  const navigate = useNavigate();

  const makeAppontment = (user: IUser): void => {
    navigate('/content/nfts', { state: user });
  };

  const getSchedule = (user: IUser): void => {
    navigate('/content/nfts', { state: user });
  };

  return (
    <Card>
      <CardHeader
        title="Doctors"
        sx={{
          background: Colors.tableTitleBackground,
          color: 'white',
          fontWeight: '500',
        }}
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                background: Colors.tableHead,
                color: 'white',
              }}
            >
              <TableCell
                sx={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Phone
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Gender
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Date of Birth
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => {
              return (
                <TableRow
                  hover
                  key={user.full_name}
                  sx={{
                    background: Colors.formBackground,
                    '&:hover': {
                      background: `${Colors.background} !important`,
                    },
                  }}
                >
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="white"
                      gutterBottom
                      noWrap
                    >
                      {user.full_name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="white"
                      gutterBottom
                      noWrap
                    >
                      {user.phone}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="white"
                      gutterBottom
                      noWrap
                    >
                      {user.gender}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="white"
                      gutterBottom
                      noWrap
                    >
                      {user.dob}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Make Appointment" arrow>
                      <IconButton
                        sx={{
                          color: 'white',
                          '&:hover': {
                            background: '#cccccc',
                          },
                        }}
                        color="inherit"
                        size="medium"
                        onClick={() => {
                          makeAppontment(user);
                        }}
                      >
                        <BookOnlineIcon fontSize="medium" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Check Schedule" arrow>
                      <IconButton
                        sx={{
                          color: 'white',
                          '&:hover': {
                            background: '#cccccc',
                          },
                        }}
                        color="inherit"
                        size="medium"
                        onClick={() => {
                          getSchedule(user);
                        }}
                      >
                        <ScheduleIcon fontSize="medium" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        p={2}
        sx={{
          background: '#616366',
          color: 'white',
          fontWeight: '500',
        }}
      >
        <TablePagination
          component="div"
          color="white"
          count={users.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
          sx={{
            color: 'white',
            fontWeight: '500',
          }}
        />
      </Box>
    </Card>
  );
};

RecentDoctorsTable.propTypes = {
  users: PropTypes.array.isRequired,
};

RecentDoctorsTable.defaultProps = {
  users: [],
};

export default RecentDoctorsTable;
// Modified @arbab
