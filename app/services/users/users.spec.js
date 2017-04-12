describe('Users factory', function () {
    var Users;
    var userList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];
    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };
    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function (_Users_) {
        Users = _Users_;
    }));
    it('users should exist', function () {
        expect(Users).toBeDefined();
    });//users should exist
    describe('.all()', function () {
        it('users.all should exist', function () {
            expect(Users.all).toBeDefined();
        });//users.all should exist

        it('should return a hard-coded list of users', function () {
            expect(Users.all()).toEqual(userList);
        });
    });//users.all



    describe('.findById(id)', function () {

        it('should exist', function () {
            expect(Users.findById).toBeDefined();
        });//should exist

        it('should return one user object if it exists', function () {
            expect(Users.findById('2')).toEqual(singleUser);
        });
        it('should return undefined if user cannot be found',function(){
            expect(Users.findById('abc')).not.toBeDefined();
        });

    });//findbyid

});//users factory

