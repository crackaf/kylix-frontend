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

  return (
    <Card>
      <CardHeader title="Collections" />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => {
              return (
                <TableRow hover key={user.address}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
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
                      color="text.primary"
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
                      color="text.primary"
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
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.dob}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Make Appointment" arrow>
                      <IconButton
                        sx={{
                          // eslint-disable-next-line quote-props
                          color: Colors.background,
                          '&:hover': {
                            background: Colors.formBackground,
                          },
                        }}
                        color="inherit"
                        size="small"
                        onClick={() => {
                          makeAppontment(user);
                        }}
                      >
                        <BookOnlineIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={users.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
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
