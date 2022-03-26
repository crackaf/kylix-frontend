import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { DoctorAppointment } from 'utils/types/db';

/**
 *
 * @param {ListChildComponentProps} props
 * @return {JSX.Element}
 */
function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

interface AppointmentListProps {
  height?: number;
  width?: number;
  itemCount?: number;
  itemSize?: number;
  itemData: DoctorAppointment[];
}

/**
 *
 * @return {JSX.Element}
 */
export default function AppointmentList({
  height = 300,
  width = 300,
  itemCount = 200,
  itemSize = 46,
  itemData,
}: AppointmentListProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        maxWidth: 300,
        bgcolor: 'background.paper',
      }}
    >
      <FixedSizeList
        height={height}
        width={width}
        itemSize={itemSize}
        itemCount={itemCount}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
