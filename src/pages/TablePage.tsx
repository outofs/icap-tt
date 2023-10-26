import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { init } from '../features/people';
import { Button, ButtonGroup, Pagination, Table } from 'react-bootstrap';
import { TableRow } from '../components/TableRow';
import { cleanStatus } from '../features/login';
import { useNavigate } from 'react-router-dom';
import { AboutMe } from '../components/AboutMe';

export const TablePage = () => {
  const disatch = useAppDispatch();
  const navigate = useNavigate();

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

  const logout = () => {
    disatch(cleanStatus());
    navigate('/');
  }


  useEffect(() => {
    disatch(init({ page: page - 1, limit }));
  }, [page, limit]);

  return <div className="my-5 d-flex flex-column align-items-center">
    <div className="d-flex justify-content-between align-items-center w-100">
      <div>
        <div>Table size</div>

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
      </div>

      <Button onClick={logout}>Logout</Button>
    </div>

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
            <Pagination.Prev onClick={prevPageHandler} disabled={page === 1} />
            {
              (page > 3) && (<>
                <Pagination.Item onClick={firstPageHandler}>{1}</Pagination.Item>
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
              (page < totalPages - 1) && (<>
                <Pagination.Ellipsis disabled />
                <Pagination.Item
                  onClick={lastPageHandler}
                >
                  {totalPages}
                </Pagination.Item>
              </>)
            }
            <Pagination.Next
              onClick={nextPageHandler}
              disabled={page === totalPages} />
          </Pagination>
        </div>
      )
    }

    <AboutMe />
  </div>;
};