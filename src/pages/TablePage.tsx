import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { init } from '../features/people';
import { Button, ButtonGroup, Pagination, Table } from 'react-bootstrap';
import { TableRow } from '../components/TableRow';

export const TablePage = () => {
  const disatch = useAppDispatch();
  const { people, totalCount, isLoading } = useAppSelector(state => state.people);

  const limitPerPage: number[] = [10, 15, 20, 30];

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(limitPerPage[0]);

  const totalPages = Math.ceil(totalCount / limit);

  useEffect(() => {
    disatch(init({ page: page - 1, limit }));
  }, [page, limit, disatch]);


  const nextPageHandler = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const firstPageHandler = () => setPage(1);
  const lastPageHandler = () => setPage(totalPages);


  useEffect(() => {
    disatch(init({ page: page - 1, limit }));
  }, [page, limit]);

  return <div className="my-5 d-flex flex-column align-items-center">
    <ButtonGroup className="mb-3">
      {
        limitPerPage.map(value => (
          <Button
            variant="secondary"
            onClick={() => setLimit(value)}
            active={value === limit}
            key={value}
          >
            {value}
          </Button>
        ))
      }
    </ButtonGroup>
    {
      !isLoading && (
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Birthday date</th>
                <th>Phone number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                people.map(person => (
                  <TableRow person={person} key={person.id} />
                ))
              }
            </tbody>
          </Table>

          <Pagination>
            <Pagination.First onClick={firstPageHandler} />
            <Pagination.Prev onClick={prevPageHandler} />
            {
              (page > 3) && (<>
                <Pagination.Item disabled>{1}</Pagination.Item>
                <Pagination.Ellipsis disabled />
              </>)
            }

            {
              (page > 1) && <Pagination.Item onClick={prevPageHandler}>{page - 1}</Pagination.Item>
            }

            <Pagination.Item active>{page}</Pagination.Item>
            {
              (page < totalPages) && <Pagination.Item onClick={nextPageHandler}>{page + 1}</Pagination.Item>
            }

            {
              (page < totalPages - 2) && (<>
                <Pagination.Ellipsis disabled />
                <Pagination.Item disabled>{totalPages}</Pagination.Item>
              </>)
            }
            <Pagination.Next onClick={nextPageHandler} />
            <Pagination.Last onClick={lastPageHandler} />
          </Pagination>
        </div>
      )
    }
  </div>
}